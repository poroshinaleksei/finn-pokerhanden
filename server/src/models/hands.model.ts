import { WithId } from 'mongodb';
import { db } from '../db';
import { HandResponse } from '../types/handResponse';

export type HandWithId = WithId<HandResponse>;

export const hands = db.collection<HandResponse>('hands');
