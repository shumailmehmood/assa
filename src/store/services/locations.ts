import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import axios, { Method, AxiosResponse } from "axios";
import { ImageCard } from '../../types/types';
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
                return { data: resolvedData.map((e: any) => e.value.data) || [] }
            },
        }),
        getCharacter: build.query({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const specificCharacter: any = await fetchWithBQ(`/api/character/${_arg}`)
                const relatedCharacter: any = await fetchWithBQ(`/api/character?name=${specificCharacter.data.name}`)
                let locationURL = specificCharacter.data.origin.url;
                const locationData: any = await fetchWithBQ(locationURL)
                let characterData = {
                    id: specificCharacter.data.id,
                    image: specificCharacter.data.image,
                    name: specificCharacter.data.name,
                    status: specificCharacter.data.status,
                    species: specificCharacter.data.species,
                    gender: specificCharacter.data.gender,
                    dimension: locationData.data.dimension,
                    type: locationData.data.type,
                    location_url: ''
                }
                return {
                    data: {
                        character: <ImageCard>characterData,
                        relatedCharacter: [...await Promise.all(relatedCharacter.data.results.map(async (character: any) => {
                            const location: any = await axios.get(character.location.url)
                            if (location.data)
                                return {
                                    id: character.id,
                                    image: character.image,
                                    name: character.name,
                                    status: character.status,
                                    species: character.species,
                                    gender: character.gender,
                                    dimension: location.data.dimension,
                                    type: location.data.type,
                                    location_url: ''
                                }
                        })), characterData]
                    }
                }
            },

        }),
    }),
})

export const {
    useGetLocationsQuery, useGetCharacterQuery, useGetSpecificLocationQuery
} = api
