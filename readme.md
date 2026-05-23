/* About Us Section */
.about-section {
  padding: var(--spacing-section-mobile) 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.about-logo-img {
  width: 150px;
  height: auto;
  object-fit: contain;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

.about-label {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
}

.about-text {
  text-align: center;
}

.about-text h2 {
  margin-bottom: 1rem;
  font-family: "Rye", serif;
}

.about-text p:last-child {
  margin-bottom: 0;
  color: var(--color-text-light);
}
