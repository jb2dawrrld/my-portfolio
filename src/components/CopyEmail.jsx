import { useEffect, useRef, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const markCopied = () => {
    setCopied(true);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const copyWithExecCommand = () => {
    const el = document.createElement("textarea");
    el.value = email;
    el.setAttribute("readonly", "");
    el.style.cssText = "position:absolute;left:-9999px";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  };

  const handleClick = () => {
    const writeText = navigator.clipboard?.writeText;
    if (typeof writeText !== "function") {
      if (copyWithExecCommand()) {
        markCopied();
      }
      return;
    }

    writeText
      .call(navigator.clipboard, email)
      .then(markCopied)
      .catch(() => {
        if (copyWithExecCommand()) {
          markCopied();
        }
      });
  };

  return (
    <button
      type="button"
      className="copy-email"
      onClick={handleClick}
      aria-label={copied ? "Email copied" : `Copy email ${email}`}
    >
      <span className="highlight-me">{email}</span>
      <span className="copy-email-icon" data-copied={copied} aria-hidden>
        <FiCopy />
        <FiCheck />
      </span>
      <span className="visually-hidden" role="status" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}

export default CopyEmail;
