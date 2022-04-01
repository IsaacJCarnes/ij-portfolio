import Pdf from '../../assets/resumeCarnes.pdf';

export default function Resume(){
    
    return (
        <object className='d-flex justify-content-center flex-column' style={{height: '65vh'}}data={Pdf} type="application/pdf" width="100%" height="100%">
            <p className='ResumeText EasyText text-center'>External link to <a className='EasyText' href={Pdf}>the PDF</a></p>
        </object>
    )
}