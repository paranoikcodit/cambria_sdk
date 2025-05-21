/**
 * Type definitions for tilemap chunks in Phaser.js
 */

/**
 * Interface for chunk creation options
 */
export interface ChunkCreateOptions {
	x: number;
	y: number;
	width: number;
	height: number;
	isLayer?: boolean;
}

/**
 * Interface for a tilemap chunk
 */
export interface TilemapChunk {
	x: number;
	y: number;
	width: number;
	height: number;
	index: number;
	layers: TilemapLayerData[];
	locked: boolean;
	visible: boolean;
}

/**
 * Interface for layer data within a tilemap chunk
 */
export interface TilemapLayerData {
	name: string;
	data: number[][];
	width: number;
	height: number;
	visible: boolean;
	properties?: Record<string, unknown>;
}

/**
 * Interface for tile data
 */
export interface TileData {
	index: number;
	x: number;
	y: number;
	width: number;
	height: number;
	rotation: number;
	flippedHorizontal: boolean;
	flippedVertical: boolean;
	properties: Record<string, unknown>;
}

/**
 * Interface for chunk manager
 */
export interface ChunkManager {
	chunks: TilemapChunk[];
	createChunk(options: ChunkCreateOptions): TilemapChunk;
	removeChunk(chunk: TilemapChunk): void;
	getChunkAt(x: number, y: number): TilemapChunk;
	getChunksInArea(
		x: number,
		y: number,
		width: number,
		height: number,
	): TilemapChunk[];
}

/**
 * Interface for tilemap with chunks support
 */
export interface TilemapWithChunks {
	readonly tilemapManager: ChunkManager;
	createFromChunks(chunksData: TilemapChunkJSON[]): void;
	getChunkAt(x: number, y: number): TilemapChunk;
	getChunksInArea(
		x: number,
		y: number,
		width: number,
		height: number,
	): TilemapChunk[];
}

/**
 * JSON format for a tilemap chunk
 */
export interface TilemapChunkJSON {
	index: number;
	x: number;
	y: number;
	width: number;
	height: number;
	data: number[] | number[][];
	properties?: Record<string, unknown>;
}

/**
 * Options for loading a tilemap chunk
 */
export interface TilemapChunkLoadOptions {
	key: string;
	data: TilemapChunkJSON;
	format?: number;
}
