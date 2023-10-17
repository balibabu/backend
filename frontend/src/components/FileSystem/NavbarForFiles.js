import React from 'react'
import searchImg from '../../images/search.png'
import hamburger from '../../images/ham.png'
import boxes from '../../images/boxes.png'
import back from '../../images/back.png';


function NavbarForFiles(props) {
    return (
        <>
            <div className='mx-5'><h6>path:{props.path}</h6></div>
            <div className='d-flex justify-content-between navbar mt-3 mx-5'>
                <div className='col-md-6'>
                    <span className='' onClick={props.back} style={{ display: 'inline-flex' }}><img src={back} style={{ width: '2rem', borderRadius: '1rem' }} /></span>
                    <h1 className='ms-3 px-3' style={{ backgroundColor: 'purple', display: 'inline-flex', borderRadius:'1rem' }}>{props.selectedFolder.title}</h1>
                </div>
                <div>
                    <div className="input-group">
                        <input type="search" className="form-control" />
                        <img onClick={() => alert('has not been implemented yet')} src={searchImg} style={{ width: '2.5rem', borderTopRightRadius: '100%', borderBottomRightRadius: '100%' }} />
                        <img
                            className='ms-3 pt-1'
                            src={hamburger}
                            onClick={() => props.setLayout('bar')}
                            style={{ height: '2rem', width: '2rem', ...(props.layout === 'box' ? {} : { ...pressed }) }}
                        />
                        <img
                            className='ms-3 pt-1'
                            src={boxes}
                            onClick={() => props.setLayout('box')}
                            style={{ height: '2rem', ...(props.layout === 'box' ? { ...pressed } : {}) }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarForFiles

var pressed = {
    boxShadow: '0 1px 5px 5px blue',
    backgroundColor: 'blue'
}