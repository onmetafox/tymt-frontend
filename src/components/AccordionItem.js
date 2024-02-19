import { useRef } from "react";

const AccordionItem = ({ faq, active, onToggle }) => {
  const { question, answer, type } = faq;

  const contentEl = useRef();
  const addLineBreak = (str) =>
  str.split('\n').map((subStr) => {
    return (
      <>
        {subStr}
        <br />
      </>
    );
  });

  return (
    <li className={`accordion_item ${active ? "active" : ""}`} onClick={onToggle}>
      { type === "block"? <span className="fs-p line-height-1-2 grey-color"> { question }</span> 
        : <>
        <div className="accordion-question fs-h4" >
          {question}
        </div>
        <span className="faq-line grey-color"><hr/></span>
        <div className={active ? "active-control" : "control"}></div>
        <div
          ref={contentEl}
          className="answer_wrapper"
          style={
            active
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className="answer fs-p">{addLineBreak(answer)}</div>
        </div>
      </>}
    </li>
  );
};

export default AccordionItem;