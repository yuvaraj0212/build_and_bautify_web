import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const Demo = () => {
    // const pdf = () => {
    //     const doc = new jsPDF("p","pt","a4");

    //     doc.html(document.querySelector("#tab"),{
    //         callback:function (pdf) {
    //             pdf.save("export.pdf")
    //         }
    //     });
    // }
    var pdfs = new jsPDF('p', 'pt', 'a4');

    function pdf() {

        // const doc = document.getElementsById('tab')[0];

        // if (doc) {
            console.log("div is ");
            // console.log(doc);
            console.log("hellowww");



            pdfs.html(document.getElementById('tab'), {
                callback: function (pdfe) {
                    pdfe.save('DOC.pdf');
                }
            })
    //    }
     }
    return (
        <>
        
            <div className="text-center mt-5">
                <h1>Work On Processing</h1>
                <button onClick={pdf} >export</button>
                <table id="tab" className="">
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                        <th>action</th>

                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <a href="www.google.com">linkl</a>
                        <input type="radio" value="value1" />
                        <input type="radio" value="value2" />
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <input type="radio" value="value1" />
                        <input type="radio" value="value2" />
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                        <input type="radio" value="value1" />
                        <input type="radio" value="value2" />
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                        <input type="radio" value="value1" />
                        <input type="radio" value="value2" />
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                        <input type="radio" value="value1" />
                        <input type="radio" value="value2" />
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                        <input type="radio" value="value1" />
                        <input type="radio" value="value2" />
                    </tr>
                </table>

            </div>
        </>
    )
}
export default Demo;