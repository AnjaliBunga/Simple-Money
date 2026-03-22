import React from 'react'
import '../App.css'
import { getallmetals } from './mock'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    const [metals, setMetals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hoverid, setHoverid] = useState(null);
    const [grid, setGrid] = useState(true);
    const sortOptions = [
        { label: <>Name <i className="fa-solid fa-up-long" style={{ paddingLeft: "5px" }}></i></>, value: "name-asc" },
        { label: <>Name <i className="fa-solid fa-down-long" style={{ paddingLeft: "5px" }}></i></>, value: "name-desc" },
        { label: <>Price <i className="fa-solid fa-up-long" style={{ paddingLeft: "5px" }}></i></>, value: "price-asc" },
        { label: <>Price <i className="fa-solid fa-down-long" style={{ paddingLeft: "5px" }}></i></>, value: "price-desc" },
    ];
    const [sortIndex, setSortIndex] = useState(0);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const data = [...getallmetals()].map(m => ({ ...m, profit: Number(((m.price - m.open) / m.open * 100).toFixed(2)) }));
            const sorted = [...data].sort((a, b) => {
                const option = sortOptions[sortIndex].value;
                if (option === "name-asc") return a.name.localeCompare(b.name);
                if (option === "name-desc") return b.name.localeCompare(a.name);
                if (option === "price-asc") return a.price - b.price;
                if (option === "price-desc") return b.price - a.price;
            });
            setMetals(sorted);
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [sortIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMetals(prev =>
                prev.map(m => {
                    const newPrice = m.price + (Math.random() > 0.5 ? 1.32 : -1.54);
                    return {
                        ...m,
                        price: newPrice,
                        profit: Number(((newPrice - m.open) / m.open * 100).toFixed(2))
                    };
                })
            );
        }, 6000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='home-container'>
            <div>

                <h1 style={{ marginBottom: "0px" }}>Metal Markets</h1>
                <p style={{ marginTop: "0px" }}>
                    Get real-time prices, news, and insights for precious, industrial, and rare metals.
                </p>
            </div>
            <div className="filters">
                <input type="text" placeholder="Search metals..." />
                <button onClick={() => setSortIndex((prev) => (prev + 1) % sortOptions.length)}>
                    {sortOptions[sortIndex].label}
                </button>
                <button onClick={() => setGrid(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-layout-grid w-3.5 h-3.5">
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                    </svg>
                </button>

                <button onClick={() => setGrid(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-list w-3.5 h-3.5">
                        <path d="M3 12h.01" />
                        <path d="M3 18h.01" />
                        <path d="M3 6h.01" />
                        <path d="M8 12h13" />
                        <path d="M8 18h13" />
                        <path d="M8 6h13" />
                    </svg>
                </button>
            </div>
            <div className={grid ? "metal-grid" : "metal-list"}>
                {loading ? (
                    Array(8).fill(0).map((_, i) => (
                        <div className="loading-card" key={i}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <div className="loading-circle" style={{ width: "20px", height: "20px" }}></div>
                                <div className="loading-text" style={{ width: "70%", height: "12px" }}></div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                                <div className="loading-text" style={{ width: "40%", height: "12px" }}></div>
                                <div className="loading-text" style={{ width: "30%", height: "12px" }}></div>
                            </div>
                            <div className="loading-text" style={{ width: "50%", height: "12px", marginTop: "8px" }}></div>
                            <div className="loading-text" style={{ width: "100%", height: "30px", marginTop: "12px" }}></div>
                        </div>
                    ))
                ) : (
                    metals?.map((metal) => (
                        <div className="card" key={metal.id} style={{ border: "2px solid white", backgroundColor: hoverid === metal.id ? `${metal.color}20` : "white", borderTop: `4px solid ${metal.color}` }} onMouseEnter={() => setHoverid(metal.id)} onMouseLeave={() => setHoverid(null)}>
                            <div style={{ display: "flex", alignItems: "center" }} className='colordiv'>
                                <span style={{backgroundColor: metal.color, boxShadow: hoverid === metal.id ? "0px 0px 25px rgba(255,255,255,1)" : `0px 0px 15px ${metal.color}90`, border: hoverid === metal.id ? "2px solid white" : `2px solid ${metal.color}`, width: "20px", height: "20px", borderRadius: "50%", display: "inline-block", marginRight: "8px"}} className='metalcolor'></span>
                                <p style={{ fontSize: "0.8rem", fontWeight: "700", paddingLeft: "10px" }}>{metal.name} ({metal.symbol})</p>
                            </div>
                            <div className="details">
                                <div>
                                    <p style={{ fontSize: "0.9rem", fontWeight: "600", margin: 0, padding: 0 }}>{metal.currency == "INR" ? "₹" : "$"} {metal.price?.toFixed(2)}</p>
                                    <p style={{ fontSize: "0.7rem", color: "#555", margin: 0, padding: 0 }}>{metal.unit}</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <p style={{ fontSize: "1.2rem", fontWeight: "800", color: metal.price > metal.open ? "green" : "red", margin: 0, padding: 0 }}>
                                        {metal.price > metal.open ? <i className="fa-solid fa-arrow-trend-up" style={{ fontWeight: "900" }}></i> : <i className="fa-solid fa-arrow-trend-down" style={{ fontWeight: "900" }}></i>}
                                    </p>
                                    <p style={{ fontSize: "0.7rem", color: metal.price > metal.open ? "green" : "red", margin: 0, padding: 0 }}>{((metal.price - metal.open) / metal.open * 100).toFixed(2)}%</p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <p style={{ fontSize: "0.8rem", color: "#555", margin: 0, padding: 0 }}>{new Date().getHours() % 12 || 12}:{new Date().getMinutes().toString().padStart(2, '0')} {new Date().getHours() >= 12 ? "PM" : "AM"}</p>
                                <button style={{ color: "white", background: metal.price > metal.open ? "linear-gradient(135deg,#006128,#005e27)" : "linear-gradient(135deg,#EB5757,#C0392B)", fontWeight: "500" }} onClick={() => { navigate(`/${metal.id}`) }}>View Details
                                    <i className={`fa-solid ${metal.price > metal.open ? "fa-arrow-trend-up" : "fa-arrow-trend-down"}`} style={{ paddingLeft: "5px" }}></i>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Home