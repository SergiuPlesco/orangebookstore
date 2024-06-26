/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as FavoritesImport } from './routes/favorites'
import { Route as BookIdImport } from './routes/$bookId'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const FavoritesRoute = FavoritesImport.update({
  path: '/favorites',
  getParentRoute: () => rootRoute,
} as any)

const BookIdRoute = BookIdImport.update({
  path: '/$bookId',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$bookId': {
      preLoaderRoute: typeof BookIdImport
      parentRoute: typeof rootRoute
    }
    '/favorites': {
      preLoaderRoute: typeof FavoritesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  BookIdRoute,
  FavoritesRoute,
])

/* prettier-ignore-end */
