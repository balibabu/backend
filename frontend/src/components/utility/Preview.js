import React from 'react'

function Preview(props) {
    return (
        <>
            <div className="modal fade" id="previewModal">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-body">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">x</button>
                        {props.children}

                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preview