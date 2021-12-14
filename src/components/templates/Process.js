import React from "react"

const Process = props => {
  const { number, title, text, i, toggle, selected } = props
  return (
    <div
      className={selected === i ? "process-item open" : "process-item"}
      key={i}
    >
      <div
        className="process-title"
        onClick={() => toggle(i)}
        role="presentation"
      >
        <span className="process-counter">{number}</span>
        <div className="d-flex process-info">
          <h4 className="h4">{title}</h4>
          <span className="process-icon"></span>
        </div>
      </div>
      <p className="process-text">{text}</p>
    </div>
  )
}

export default Process
