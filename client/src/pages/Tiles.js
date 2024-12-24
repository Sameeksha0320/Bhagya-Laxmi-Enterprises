import React, { useState } from 'react';

const tiles = [
    { id: 1, name: 'Glossy White Tile', price: 500, brand: 'Johnson', size: 'Medium', color: 'White', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Matte Grey Tile', price: 700, brand: 'Kajaria', size: 'Large', color: 'Grey', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Wooden Finish Tile', price: 1000, brand: 'Somany', size: 'Large', color: 'Brown', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Black Mosaic Tile', price: 1500, brand: 'Orientbell', size: 'Small', color: 'Black', image: 'https://via.placeholder.com/150' },
];

const Sidebar = ({ filters, setFilters }) => {
    const updateFilters = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    return (
        <div style={{ 
            width: '20%', 
            padding: '1rem', 
            background: 'linear-gradient(135deg, #f3f3f3, #e0e0e0)', 
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            marginRight: '1rem'
        }}>
            <h3 style={{ textAlign: 'center', color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '0.5rem' }}>Filters</h3>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold', color: '#555' }}>Price:</label>
                <input 
                    type="range" 
                    min="200" 
                    max="2000" 
                    value={filters.price} 
                    onChange={(e) => updateFilters('price', e.target.value)} 
                    style={{ width: '100%', marginTop: '0.5rem' }}
                />
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold', color: '#555' }}>Brand:</label>
                <select 
                    onChange={(e) => updateFilters('brand', e.target.value)} 
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    <option value="">All</option>
                    <option value="Johnson">Johnson</option>
                    <option value="Kajaria">Kajaria</option>
                    <option value="Somany">Somany</option>
                    <option value="Orientbell">Orientbell</option>
                </select>
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold', color: '#555' }}>Size:</label>
                <select 
                    onChange={(e) => updateFilters('size', e.target.value)} 
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    <option value="">All</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>
            <div>
                <label style={{ fontWeight: 'bold', color: '#555' }}>Color:</label>
                <select 
                    onChange={(e) => updateFilters('color', e.target.value)} 
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    <option value="">All</option>
                    <option value="White">White</option>
                    <option value="Grey">Grey</option>
                    <option value="Brown">Brown</option>
                    <option value="Black">Black</option>
                </select>
            </div>
        </div>
    );
};

const Tiles = () => {
    const [filters, setFilters] = useState({ price: 2000, brand: '', size: '', color: '' });
    const [sortBy, setSortBy] = useState('');

    const filteredTiles = tiles.filter((tile) => {
        return (
            tile.price <= filters.price &&
            (!filters.brand || tile.brand === filters.brand) &&
            (!filters.size || tile.size === filters.size) &&
            (!filters.color || tile.color === filters.color)
        );
    });

    const sortedTiles = filteredTiles.sort((a, b) => {
        if (sortBy === 'priceLow') return a.price - b.price;
        if (sortBy === 'priceHigh') return b.price - a.price;
        return 0;
    });

    return (
        <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
            <Sidebar filters={filters} setFilters={setFilters} />

            <div style={{ flex: 1, padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <h2>Tiles</h2>
                    <select onChange={(e) => setSortBy(e.target.value)}>
                        <option value="">Sort By</option>
                        <option value="priceLow">Price: Low to High</option>
                        <option value="priceHigh">Price: High to Low</option>
                    </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                    {sortedTiles.map((tile) => (
                        <div key={tile.id} style={{ border: '1px solid #ccc', padding: '1rem', textAlign: 'center' }}>
                            <img src={tile.image} alt={tile.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                            <h3>{tile.name}</h3>
                            <p>Price: &#8377;{tile.price}</p>
                            <button style={{ padding: '0.5rem 1rem', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tiles;
