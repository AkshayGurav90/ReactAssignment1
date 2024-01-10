

export default function Courses({Subject, Duration, Fees}) {
    return (
        <article className="courses-container">
            <h2>Subject : {Subject}</h2>
            <p className="model">Duration {Duration}</p>
            <p>Fees - {Fees}</p>
        </article>
    );
}