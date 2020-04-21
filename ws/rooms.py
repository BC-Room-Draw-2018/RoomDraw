import asyncio
import websockets

import utils

clients = set()
async def subscribe(websocket):
	clients.add(websocket)

async def unsubscribe(websocket):
	if websocket in clients:
		clients.remove(websocket)

async def update(websocket, payload):
	if utils.is_privileged(websocket):
		for client in clients:
			await client.send(payload)
