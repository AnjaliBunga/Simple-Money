import React, { useState, useEffect } from 'react'
import '../App.css'
import { useNavigate, useParams } from 'react-router-dom'
import { getmetalbyid } from './mock.js'

const Details = () => {
    const navigate = useNavigate();
    const [metal, setMetal] = useState(null);
    const [loading, setLoading] = useState(true);
    const categoryColors = {
        Precious: '#FFD700',
        Industrial: '#A9A9A9',
        Rare: '#8A2BE2'
    };

    const id = useParams().id;

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const metalData = getmetalbyid(Number(id));
            setMetal(metalData);
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [id]);

    if (loading) {
        return (
            <div className='details-container'>
                <div className='loading-header' style={{ gap: "15px", padding: "16px" }}>
                    <div className='loading-circle' style={{ width: "28px", height: "28px" }}></div>
                    <div style={{ flex: 1, gap: "8px", display: "flex", flexDirection: "column" }}>
                        <div className="loading-text" style={{ width: "40%", height: "18px" }}></div>
                        <div className="loading-text" style={{ width: "30%", height: "12px" }}></div>
                    </div>
                </div>

                <div className='loading-price-card'>
                    <div className="loading-text" style={{ width: "25%", height: "10px", margin: "0 auto 10px" }}></div>
                    <div className='loading-price-main'></div>
                    <div className="loading-text" style={{ width: "35%", height: "12px", margin: "10px auto" }}></div>
                </div>

                <div className='loading-footer'>
                    {Array(6).fill(0).map((_, i) => (
                        <div className='loading-footer-card' key={i}>
                            <div className='loading-footer-label'></div>
                            <div className='loading-footer-value'></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (!metal) {
        return (
            <div className='details-container'>
                <div className='stat-card'>
                    <h2>Metal not found</h2>
                </div>
            </div>
        );
    }

    const isUp = metal.price > metal.open;
    const color = categoryColors[metal.category] || '#ddd';

    return (
        <div className='details-container'>
            <button onClick={() => navigate(`/`)} style={{width:"fit-content",border:"1px solid rgba(0,0,0,0.322)",fontFamily:"poppins",fontWeight:600,borderRadius:"25px",padding:"10px 15px",cursor:"pointer",marginBottom:"10px",justifyContent:"center",alignItems:"center"}}><i className="fa-solid fa-arrow-left-long" style={{marginRight:"10px"}}></i> Back</button>
            
            <div className='details-header' style={{ backgroundColor: `${color}15`, borderColor: `${color}40` }}>
                <span
                    className='metalcolor'
                    style={{
                        backgroundColor: metal.color,
                        border: '2px solid white',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        boxShadow: `0 0 15px ${metal.color}40`,
                    }}
                />
                <div className='details-header-content'>
                    <h1>{metal.name}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className='details-symbol'>{metal.symbol}</span>
                        <span className='details-category' style={{ backgroundColor: color }}>
                            {metal.category}
                        </span>
                    </div>
                </div>
            </div>

            <div className='pricecard'>
                <h2>Current Price</h2>
                <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"20px",justifyContent:"center",alignItems:"center"}}>

                <p className='price-main'>
                    {metal.currency === 'INR' ? '₹' : '$'}{metal.price?.toFixed(2)}
                    <span className='price-unit'>/ {metal.unit}</span>
                </p>
                <div className={`price-change ${isUp ? 'up' : 'down'}`}>
                    <i className={`fa-solid ${isUp ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down'}`}></i>
                    <span>{Math.abs(metal.price - metal.open).toFixed(2)}</span>
                    <span>({((metal.price - metal.open) / metal.open * 100).toFixed(2)}%)</span>
                </div>
                </div>
            </div>

            <div className='details-section'>
                <div className='stat-card'>
                    <p className='stat-label'>Previous Open</p>
                    <p className='stat-value'>{metal.currency === 'INR' ? '₹' : '$'}{metal.open.toFixed(2)}</p>
                </div>
                <div className='stat-card'>
                    <p className='stat-label'>Previous Close</p>
                    <p className='stat-value'>{metal.currency === 'INR' ? '₹' : '$'}{metal.close.toFixed(2)}</p>
                </div>
                <div className='stat-card'>
                    <p className='stat-label'>24H High</p>
                    <p className='stat-value'>{metal.currency === 'INR' ? '₹' : '$'}{metal.high.toFixed(2)}</p>
                </div>
                <div className='stat-card'>
                    <p className='stat-label'>24H Low</p>
                    <p className='stat-value'>{metal.currency === 'INR' ? '₹' : '$'}{metal.low.toFixed(2)}</p>
                </div>
                <div className='stat-card'>
                    <p className='stat-label'>Currency</p>
                    <p className='stat-value'>{metal.currency}</p>
                </div>
                <div className='stat-card'>
                    <p className='stat-label'>Last Updated</p>
                    <p className='stat-value'>{new Date().toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;