import { useEffect, useMemo, useState } from "react";
const API = "http://localhost:5000/api";
const money = n => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(n || 0);

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadProducts(term = "") {
    setLoading(true); setError("");
    try {
      const r = await fetch(`${API}/products?search=${encodeURIComponent(term)}`);
      if (!r.ok) throw new Error("Cannot load products. Check that backend and MongoDB are running.");
      setProducts(await r.json());
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  }
  useEffect(() => { loadProducts(); }, []);
  const total = useMemo(() => cart.reduce((sum, p) => sum + p.price * p.qty, 0), [cart]);
  function add(p) {
    setCart(old => old.some(x => x._id === p._id)
      ? old.map(x => x._id === p._id ? { ...x, qty: x.qty + 1 } : x)
      : [...old, { ...p, qty: 1 }]);
  }
  function change(id, amount) {
    setCart(old => old.map(p => p._id === id ? { ...p, qty: p.qty + amount } : p).filter(p => p.qty > 0));
  }

  return <div className="page">
    <header><a className="logo" href="/">Shop<span>Sphere</span></a>
      <form onSubmit={e => { e.preventDefault(); loadProducts(search); }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." />
        <button>Search</button>
      </form>
      <a className="cart-link" href="#cart">Cart ({cart.reduce((n, p) => n + p.qty, 0)})</a>
    </header>
    <section className="hero"><p>YOUR EVERYDAY FINDS</p><h1>Good things.<br/><span>Great prices.</span></h1>
      <p>Discover your next favorite thing from our growing collection.</p><a href="#products">Explore products ↓</a>
    </section>
    <main>
      <div className="heading" id="products"><div><small>HANDPICKED FOR YOU</small><h2>Explore products</h2></div><span>{products.length} items</span></div>
      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error} <button onClick={() => loadProducts(search)}>Retry</button></p>}
      {!loading && !error && products.length === 0 && <p className="empty">No products found. Add products to MongoDB through the API.</p>}
      <section className="grid">{products.map(p => <article className="card" key={p._id}>
        <div className="photo">{p.imageUrl ? <img src={p.imageUrl} alt={p.name}/> : <span>{p.name?.[0]?.toUpperCase()}</span>}<small>{p.category}</small></div>
        <div className="details"><h3>{p.name}</h3><p>{p.description || "A great addition to your everyday essentials."}</p>
          <div className="buy"><strong>{money(p.price)}</strong><button disabled={p.countInStock === 0} onClick={() => add(p)}>+ Add</button></div>
          <small className="stock">{p.countInStock} in stock</small>
        </div></article>)}</section>
      <section id="cart" className="cart"><div className="heading"><h2>Your cart</h2><strong>{money(total)}</strong></div>
        {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map(p => <div className="cart-row" key={p._id}>
          <span>{p.name} — {money(p.price)}</span><div><button onClick={() => change(p._id, -1)}>−</button><b>{p.qty}</b><button onClick={() => change(p._id, 1)}>+</button></div>
        </div>)}
        <p className="note">Demo cart only: checkout, orders, and payments are not implemented.</p>
      </section>
    </main>
    <footer>ShopSphere · MERN E-Commerce learning project</footer>
  </div>;
}
