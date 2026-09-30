import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Description from './Description.js'
import Image from './Image.js'
import Name from './Name.js'
import Price from './Price.js'
import './App.css'

const firstName = 'Taylor'

function App() {
  const [isAdded, setIsAdded] = useState(false)

  return (
    <main className="shop-page">
      <div className="shop-content">
        <header className="shop-header">
          <a className="wordmark" href="#top" aria-label="Forma home">
            forma<span>.</span>
          </a>
          <span className="header-note">Thoughtful things, made to last</span>
        </header>

        <section className="product-section" id="top" aria-labelledby="page-title">
          <div className="intro-copy">
            <p className="eyebrow">THE EVERYDAY EDIT / 01</p>
            <h1 id="page-title">Find your frequency.</h1>
          </div>

          <Card className="product-card">
            <div className="product-photo-wrap">
              <Image />
              <span className="photo-label">DESIGNED FOR THE DAILY</span>
            </div>
            <Card.Body className="product-details">
              <p className="product-category">WIRELESS AUDIO</p>
              <Name />
              <Price />
              <div className="detail-rule" />
              <Description />
              <Button
                className="cart-button"
                onClick={() => setIsAdded(true)}
                aria-live="polite"
              >
                {isAdded ? 'Added to cart' : 'Add to Cart'}
                <span aria-hidden="true">{isAdded ? '✓' : '→'}</span>
              </Button>
              <p className="shipping-note">Complimentary shipping on every order</p>
            </Card.Body>
          </Card>

          <section className="greeting" aria-live="polite">
            <div>
              <p className="eyebrow">A LITTLE NOTE FOR YOU</p>
              <h2>Hello, {firstName ? `${firstName}!` : 'there!'}</h2>
            </div>
            {firstName && (
              <img
                className="greeting-image"
                src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=240&q=80"
                alt="Warm morning sunlight over a quiet field"
              />
            )}
          </section>
        </section>

        <footer className="shop-footer">
          <span>FORMA AUDIO</span>
          <span>MADE FOR THE MOMENTS IN BETWEEN</span>
        </footer>
      </div>
    </main>
  )
}

export default App