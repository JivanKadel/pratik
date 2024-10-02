import localforage from 'localforage';
import {
	cartTableName,
	databaseName,
	databaseVersion,
	productTableName,
	userTableName
} from './local_db_table_list';

export const productDB = localforage.createInstance({
	name: databaseName,
	version: databaseVersion,
	storeName: productTableName,
	driver: localforage.INDEXEDDB,
	description: 'To Store product data'
});
export const cartDB = localforage.createInstance({
	name: databaseName,
	version: databaseVersion,
	storeName: cartTableName,
	driver: localforage.INDEXEDDB,
	description: 'To Store cart data'
});
export const userDB = localforage.createInstance({
	name: databaseName,
	version: databaseVersion,
	storeName: userTableName,
	driver: localforage.INDEXEDDB,
	description: 'To Store Users data'
});
