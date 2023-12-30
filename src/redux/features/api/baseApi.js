import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes:['Tasks'],
    endpoints: (builder) => ({
        getTask : builder.query({
            query:() => '/studentsetails',
            providesTags:['Tasks']
        }),
        updateTask: builder.mutation({
            query: ({id , data}) => ({
                url : `/studentsetails/${id}`,
                method: 'PATCH',
                body:data
            }),
            invalidatesTags:['Tasks']
        }),
        deleteTask: builder.mutation({
            query: ({id , data}) => ({
                url : `/studentsetails/${id}`,
                method: 'DELETE',
                body:data
            }),
            invalidatesTags:['Tasks']
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url : '/studentsetails',
                method: 'POST',
                body:task,
            }),
            invalidatesTags:['Tasks']
        }),
    }),
});

export const { useGetTaskQuery , useUpdateTaskMutation , useAddTaskMutation ,useDeleteTaskMutation} = baseApi;

export default baseApi;