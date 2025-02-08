


export default function Modal({ id, header, body, footer, onClose }) {

    return <div className="modal" id={id || 'Modal'}>
        <div className="modal-content">
            <div className="header">
                <span className="close-modal-icon" onClick={onClose}>&times;</span>
                <h2>{header ? header: 'this is default Header'}</h2>
            </div>
            <div className="body">
                {
                    body ? body : <div>
                        <p>this is Our default Body</p>
                    </div>
                }
            </div>
            <div className="footer">
                {
                    footer ? footer : <h2>this is default footer</h2>
                }
            </div>
        </div>
    </div>
}