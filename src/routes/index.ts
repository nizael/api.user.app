import { Router } from "express";
import { userRouters } from "./users";
import { sessionRouters } from "./sessions";
export const routeIndex = Router()
routeIndex.use('/users', userRouters )
routeIndex.use('/sessions', userRouters)