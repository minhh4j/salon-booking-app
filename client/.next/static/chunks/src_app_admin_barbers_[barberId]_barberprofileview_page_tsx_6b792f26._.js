(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_admin_barbers_[barberId]_barberprofileview_page_tsx_6b792f26._.js", {

"[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$BarberSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/redux/features/BarberSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ProfileView = ()=>{
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params?.barberId ?? "";
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { barbers, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "ProfileView.useSelector": (state)=>state.barber
    }["ProfileView.useSelector"]);
    const data = barbers.find((barber)=>barber._id === id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileView.useEffect": ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$features$2f$BarberSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBarbers"])());
        }
    }["ProfileView.useEffect"], [
        dispatch
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-white text-center",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
        lineNumber: 39,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-red-500 text-center",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
        lineNumber: 40,
        columnNumber: 21
    }, this);
    if (!barbers || barbers.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-white text-center",
        children: "No barbers found."
    }, void 0, false, {
        fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
        lineNumber: 41,
        columnNumber: 48
    }, this);
    const profile = {
        _id: data?._id || "Not Found",
        employeeName: data?.employeeName || "John Doe",
        employeeFees: data?.employeeFees || 250,
        specialCut: data?.specialCut || "No specialCut",
        description: data?.description || "No description available",
        employeeImage: data?.employeeImage || "/avatar-placeholder.png",
        pendingAppointments: [
            {
                date: "4/16/2025",
                time: "10:00 AM"
            },
            {
                date: "4/16/2025",
                time: "1:00 PM"
            },
            {
                date: "4/16/2025",
                time: "4:00 PM"
            },
            {
                date: "4/17/2025",
                time: "12:00 PM"
            }
        ],
        completedAppointments: [
            {
                date: "4/14/2025",
                time: "11:00 AM"
            },
            {
                date: "4/14/2025",
                time: "2:00 PM"
            },
            {
                date: "4/15/2025",
                time: "10:30 AM"
            },
            {
                date: "4/15/2025",
                time: "3:30 PM"
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1B1B1A] text-[#D6D7D6] min-h-screen p-6 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto border border-[#757442] rounded-2xl p-10 shadow-xl bg-[#2B2B2B] transition-all duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-center text-3xl font-bold mb-10 text-[#D6D7D6] tracking-wide",
                    children: "✂️ Barber Profile"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col md:flex-row gap-6 items-center mb-12 border-l-[6px] border-[#757442] bg-[#2B2B2B] rounded-xl p-6 shadow-xl group hover:scale-[1.01] transition-transform duration-300 ease-in-out",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#757442] border-l-transparent rounded-tr-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-28 h-28 rounded-full overflow-hidden border-2 border-[#757442] shadow-md bg-gray-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: profile?.employeeImage,
                                alt: profile.employeeName,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 mt-4 md:mt-0 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-semibold mb-1",
                                    children: profile.employeeName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1 text-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scissors, {
                                            className: "inline mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 41
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Special Cut:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 78
                                        }, this),
                                        " ",
                                        profile.specialCut
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Fees:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 41
                                        }, this),
                                        " ₹",
                                        profile.employeeFees
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm italic",
                                    children: profile.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-[#fffb00] text-black font-medium px-4 py-2 rounded-full text-sm hover:opacity-90 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(User, {
                                                    className: "inline mr-2 w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                " Present"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-red-600 text-white font-medium px-4 py-2 rounded-full text-sm hover:bg-red-500 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Trash2, {
                                                    className: "inline mr-2 w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this),
                                                " Delete"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-green-600 text-white font-medium px-4 py-2 rounded-full text-sm hover:bg-green-500 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Edit, {
                                                    className: "inline mr-2 w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                " Edit"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#1B1B1A] border border-[#757442] rounded-xl p-6 shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-4 text-center",
                                    children: "📅 Pending Appointments"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                profile.pendingAppointments.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#3a3a3a] text-sm px-4 py-2 rounded-md mb-2 flex justify-between items-center hover:bg-[#444] transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: a.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#fffb00]",
                                                children: a.time
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#1B1B1A] border border-[#757442] rounded-xl p-6 shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-4 text-center",
                                    children: "✅ Completed Appointments"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                profile.completedAppointments.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#3a3a3a] text-sm px-4 py-2 rounded-md mb-2 flex justify-between items-center hover:bg-[#444] transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: a.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-400",
                                                children: a.time
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/barbers/[barberId]/barberprofileview/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
};
_s(ProfileView, "15fJbz49gE2tWSd2DhiaEUNEqN4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = ProfileView;
const __TURBOPACK__default__export__ = ProfileView;
var _c;
__turbopack_context__.k.register(_c, "ProfileView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_admin_barbers_%5BbarberId%5D_barberprofileview_page_tsx_6b792f26._.js.map