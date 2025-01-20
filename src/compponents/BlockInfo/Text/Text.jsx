import "./text.css"

export function Text({ children }) {
    return (
        <div className="info">
            <h1 className="title">{children}</h1>
            <p className="text">Our speaker lineup comprises leaders from Stripe and beyond, who’ll share knowledge and advice on the most pressing topics facing companies today. Stay tuned for more announcements.</p>
        </div>
    )
} 