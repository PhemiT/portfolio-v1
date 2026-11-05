import React, { useState } from 'react'
import Icon from '../components/Icon'
import ICONS from '../constants/ICONS'

const Contact = () => {
    const [copied, setCopied] = useState(false)
    const email = "phemiwrites@gmail.com"

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2500)
        } catch {
            // fallback
            setCopied(true)
            setTimeout(() => setCopied(false), 2500)
        }
    }

    return (
        <section className="folio-contact mg-container" id="contact">
            <div className="heading">
                <h3><span>03.</span> Contact</h3>
            </div>

            <div className="contact-box">
                <span className="contact-badge">Have an idea or opportunity?</span>
                <h2 className="contact-title gradient-text">Let&apos;s build together.</h2>
                <p className="contact-desc">
                    Whether you have an upcoming project, a full-time or contract opportunity, or just want to connect over software engineering and Web3, my inbox is always open.
                </p>

                <div className="contact-actions">
                    <a href={`mailto:${email}`} className="btn-primary">
                        <Icon icon={ICONS.mail} size={16} color="#333332" />
                        <span>Send an Email</span>
                    </a>

                    <button 
                        type="button" 
                        onClick={handleCopy} 
                        className={`btn-secondary copy-btn ${copied ? 'is-copied' : ''}`}
                        aria-label="Copy email address"
                    >
                        <Icon icon={copied ? ICONS.check : ICONS.copy} size={16} color="#333332" />
                        <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
                    </button>
                </div>

                <div className="contact-direct">
                    <span>Direct:</span>
                    <a href={`mailto:${email}`} className="contact-email-link">{email}</a>
                </div>
            </div>
        </section>
    )
}

export default Contact
