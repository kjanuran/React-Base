function Footer() {
    const footerStyle = {
        backgroundColor: "#1e293b",
        color: "#fff",
        padding: "24px 20px",
        textAlign: "center",
    };

    const headingStyle = {
        marginBottom: "8px",
    };

    const paragraphStyle = {
        fontSize: "14px",
        color: "#cbd5e1",
        margin: 0,
    };

    return (
        <footer style={footerStyle}>
            <h3 style={headingStyle}>KKJ</h3>
            <p style={paragraphStyle}>&copy; 2026 My Website. All rights reserved.</p>
        </footer>
    );
}

export default Footer;