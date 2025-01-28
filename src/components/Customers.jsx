function Customers() {
  const customers = [
    'HashiCorp', 'McDonald\'s', 'Facebook', 'Washington Post',
    'Boeing', 'Netflix', 'Nintendo', 'Uber'
  ];

  return (
    <section className="customers">
      <p>Trusted by the best frontend teams</p>
      <div className="customer-logos">
        {customers.map((customer, index) => (
          <div key={index} className="customer-logo">
            {customer}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Customers