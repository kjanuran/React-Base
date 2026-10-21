function Hero() {
    const heroStyle = {
        minHeight: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#f1f5f9",
    };

    const headingStyle = {
        fontSize: "42px",
        color: "#1e293b",
        marginBottom: "12px",
    };

    const buttonStyle = {
        backgroundColor: "#2563eb",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        padding: "12px 24px",
        borderRadius: "6px",
    };

    return (
        <section style={heroStyle}>
        <h1 style={headingStyle}>Welcome to Our Website</h1>

        <p>Your journey starts here.</p>

        <button style={buttonStyle}>Get Started</button>
        </section>
    );
}

export default Hero;