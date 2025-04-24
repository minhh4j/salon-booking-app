module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/app/api/endpoints.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "endpoint": (()=>endpoint)
});
const endpoint = {
    BARBER: {
        GET: '/get-employee'
    },
    SERVICE: {
        GET: '/get-service'
    },
    BOOKING: {
        BOOK: '/book',
        ALL_GET: '/allAppointment',
        GET_BY_GET: (id)=>`/my/${id}`
    },
    ADMIN: {
        BARBER: {
            ADD: '/add-employee',
            DELETE: (id)=>`/delete-employee/${id}`
        },
        SERVICE: {
            DELETE: (id)=>`/delete-service/${id}`,
            ADD: '/add-service'
        }
    }
};
}}),
"[project]/src/redux/features/BarberSlice.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "deleteBarber": (()=>deleteBarber),
    "fetchBarbers": (()=>fetchBarbers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/endpoints.js [app-ssr] (ecmascript)");
;
;
;
const initialState = {
    barbers: [],
    loading: false,
    error: null
};
const fetchBarbers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('barbers/fetchAll', async (_, thunkAPI)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:5001/api${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endpoint"].BARBER.GET}`);
        return res.data.employees;
    } catch (error) {
        console.log(error, "hh");
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch barbers');
    }
});
const deleteBarber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('barbers/deleteBarber', async (barberId, thunkAPI)=>{
    console.log(barberId, "fsdfsfdsf");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`http://localhost:5001/api/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endpoint"].ADMIN.BARBER.DELETE(barberId)}`);
        console.log(barberId, "barber id");
        return barberId;
    } catch (error) {
        console.log(error, " sdfghjkl ");
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to delete barber');
    }
});
const barberSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'barbers',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchBarbers.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchBarbers.fulfilled, (state, action)=>{
            state.loading = false;
            state.barbers = action.payload;
        }).addCase(fetchBarbers.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteBarber.fulfilled, (state, action)=>{
            state.barbers = state.barbers.filter((barber)=>barber._id !== action.payload);
        }).addCase(deleteBarber.rejected, (state, action)=>{
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = barberSlice.reducer;
}}),
"[project]/src/redux/features/ServicesSlice.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addService": (()=>addService),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteService": (()=>deleteService),
    "fetchServices": (()=>fetchServices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/endpoints.js [app-ssr] (ecmascript)");
;
;
;
const initialState = {
    service: [],
    loading: false,
    error: null
};
const fetchServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/fetchAll', async (_, thunkAPI)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:5001/api/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endpoint"].SERVICE.GET}`);
        console.log("Fetched services:", res.data);
        return res.data.services;
    } catch (error) {
        console.log("Service fetch error:", error);
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch services');
    }
});
const deleteService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/delete', async (serviceId, thunkAPI)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`http://localhost:5001/api/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endpoint"].ADMIN.SERVICE.DELETE(serviceId)}`);
        return serviceId;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to delete service');
    }
});
const addService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/add', async (newService, thunkAPI)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`http://localhost:5001/api/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endpoint"].ADMIN.SERVICE.ADD}`, newService);
        return res.data.service;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to add service');
    }
});
const serviceSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'service',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchServices.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchServices.fulfilled, (state, action)=>{
            state.loading = false;
            state.service = action.payload;
        }).addCase(fetchServices.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteService.fulfilled, (state, action)=>{
            state.service = state.service.filter((service)=>service._id !== action.payload);
        }).addCase(deleteService.rejected, (state, action)=>{
            state.error = action.payload;
        }).addCase(addService.fulfilled, (state, action)=>{
            state.service.push(action.payload);
        }).addCase(addService.rejected, (state, action)=>{
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = serviceSlice.reducer;
}}),
"[project]/src/redux/features/AppoinmentSlice.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAppointment": (()=>createAppointment),
    "default": (()=>__TURBOPACK__default__export__),
    "getAllAppointments": (()=>getAllAppointments),
    "getMyBookings": (()=>getMyBookings),
    "resetAppointment": (()=>resetAppointment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/endpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
;
;
const initialState = {
    appointment: null,
    loading: false,
    error: null,
    success: false,
    myBookings: [],
    allBookings: []
};
const createAppointment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('appointment/create', async (payload, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`http://localhost:5001/api${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endpoint"].BOOKING.BOOK}`, payload);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to create appointment');
    }
});
const getAllAppointments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('appointment/getAllAppointments', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:5001/api${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endpoint"].BOOKING.ALL_GET}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to fetch all appointments');
    }
});
const getMyBookings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('appointment/getMyBookings', async (userId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:5001/api${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endpoint"].BOOKING.GET_BY_GET(userId)}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to fetch bookings');
    }
});
const appointmentSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'appointment',
    initialState,
    reducers: {
        resetAppointment: (state)=>{
            state.loading = false;
            state.success = false;
            state.error = null;
            state.appointment = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(createAppointment.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.success = false;
        }).addCase(createAppointment.fulfilled, (state, action)=>{
            state.loading = false;
            state.success = true;
            state.appointment = action.payload;
        }).addCase(createAppointment.rejected, (state, action)=>{
            state.loading = false;
            state.success = false;
            state.error = action.payload || 'Something went wrong';
        })// Get user bookings
        .addCase(getMyBookings.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getMyBookings.fulfilled, (state, action)=>{
            state.loading = false;
            state.myBookings = action.payload;
        }).addCase(getMyBookings.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || 'Failed to fetch bookings';
        }).addCase(getAllAppointments.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getAllAppointments.fulfilled, (state, action)=>{
            state.loading = false;
            state.myBookings = action.payload;
        }).addCase(getAllAppointments.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || 'Failed to fetch all appointments';
        });
    }
});
const { resetAppointment } = appointmentSlice.actions;
const __TURBOPACK__default__export__ = appointmentSlice.reducer;
}}),
"[project]/src/redux/app/store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$BarberSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/BarberSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$ServicesSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/ServicesSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$AppoinmentSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/AppoinmentSlice.tsx [app-ssr] (ecmascript)");
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        barber: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$BarberSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        service: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$ServicesSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        appointment: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$AppoinmentSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
const __TURBOPACK__default__export__ = store;
}}),
"[project]/src/redux/ReduxProvider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$app$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/app/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const ReduxProvider = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$app$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/redux/ReduxProvider.tsx",
        lineNumber: 12,
        columnNumber: 12
    }, this);
};
const __TURBOPACK__default__export__ = ReduxProvider;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__5c533710._.js.map