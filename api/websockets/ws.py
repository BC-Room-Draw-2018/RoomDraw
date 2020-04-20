#!/usr/bin/python3

import asyncio
import websockets
import json

import rooms

async def handle_subscribe(websocket, payload):
	subscribe_events = payload.split()
	if "room" in subscribe_events:
		await rooms.subscribe(websocket)

commands = {
	"subscribe": handle_subscribe,
	"room": rooms.update
}

async def handler(websocket, path):
	try:
		async for message in websocket:
			try:
				data = json.loads(message)
			except ValueError:
				await websocket.send(json.dumps({"error": "Invalid JSON"}))
				continue

			if "command" in data and data["command"] in commands:
				cmd = data["command"]
				callback = commands[cmd]
				payload = None

				if "payload" in data:
					payload = data["payload"]

				await callback(websocket, payload)
			else:
				await websocket.send(json.dumps({"error": "Invalid command"}))
				continue
	finally:
		await rooms.unsubscribe(websocket)

start_server = websockets.serve(handler, 'localhost', 8080)

loop = asyncio.get_event_loop()
loop.run_until_complete(start_server)
loop.run_forever()
