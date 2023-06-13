import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com' }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        getLocations: build.query({
            query: (page: any) => `/api/location?page=${page}`
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
    useGetLocationsQuery,
} = api
