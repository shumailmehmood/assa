import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com' }),
    tagTypes: [],
    endpoints: (build) => ({
        getLocations: build.query({
            query: (page: any) => `/api/location?page=${page}`
        }),
        getSpecificLocation: build.query({
            query: (id: any) => `/api/location/${id}`
        }),
        getCharacters: build.query({
            query: (apis) => {
                return apis.map((api: string) => api)
            }
        }),
        // addPost: build.mutation<Post, Partial<Post>>({
        //     query: (body) => ({
        //         url: `posts`,
        //         method: 'POST',
        //         body,
        //     }),
        //     invalidatesTags: [{ type: 'Post', id: 'LIST' }],
        // }),

    }),
})

export const {
    useGetLocationsQuery, useGetCharactersQuery, useGetSpecificLocationQuery
} = api
