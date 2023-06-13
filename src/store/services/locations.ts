import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import axios, { Method, AxiosResponse } from "axios";
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com' }),
    tagTypes: [],
    endpoints: (build) => ({
        getLocations: build.query({
            query: (page: any) => `/api/location?page=${page}`
        }),
        getSpecificLocation: build.query({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const specificLocation: any = await fetchWithBQ(`/api/location/${_arg}`)
                let multipleAPIs = specificLocation.data.residents.map((e: string) => axios.get(e))
                const resolvedData: any = await Promise.allSettled(multipleAPIs)
                return { data: resolvedData.map((e: any) => e.value.data) }
            },
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
