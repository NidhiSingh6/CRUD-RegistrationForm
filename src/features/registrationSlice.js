import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    data: []
}


export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        addData: (state, action) => {
            const temp = {
                id: nanoid(),
                ...action.payload
            }
            state.data.push(temp)
        },
        removeData: (state, action) => {
            state.data = state.data.filter(f => f.id !== action.payload)
        },
        updateData:(state,action) =>{
            console.log("dfgh",action.payload)
            state.data.map((f) =>{
                if (f.id ===action.payload.id){
                    state.data[0].email=action.payload.newformData.email
                    state.data[0].firstName=action.payload.newformData.firstName
                    state.data[0].lastName=action.payload.newformData.lastName
                }
            })
        }
    }
})

export const { addData, removeData,updateData} = registrationSlice.actions;
export default registrationSlice.reducer;