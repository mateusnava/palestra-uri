const marks = [
  { left: "12%", bottom: "8%", size: "clamp(2.4rem, 5vw, 4.2rem)", tone: "sand", delay: "0s" },
  { left: "38%", bottom: "22%", size: "clamp(3.2rem, 7vw, 5.8rem)", tone: "copper", delay: "0.85s" },
  { left: "62%", bottom: "12%", size: "clamp(2rem, 4.2vw, 3.6rem)", tone: "sand", delay: "1.7s" },
  { left: "78%", bottom: "38%", size: "clamp(2.8rem, 6vw, 5rem)", tone: "copper", delay: "2.55s" },
  { left: "24%", bottom: "48%", size: "clamp(1.8rem, 3.8vw, 3.2rem)", tone: "muted", delay: "3.4s" },
  { left: "52%", bottom: "52%", size: "clamp(2.6rem, 5.5vw, 4.6rem)", tone: "sand", delay: "4.25s" },
];

export function QuestionField() {
  return (
    <figure className="question-field" aria-hidden>
      {marks.map((mark) => (
        <span
          key={`${mark.left}-${mark.delay}`}
          className={`question-field__mark question-field__mark--${mark.tone}`}
          style={{
            left: mark.left,
            bottom: mark.bottom,
            fontSize: mark.size,
            animationDelay: mark.delay,
          }}
        >
          ?
        </span>
      ))}
    </figure>
  );
}
