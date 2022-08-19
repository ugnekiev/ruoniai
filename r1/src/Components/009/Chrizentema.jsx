import rand from "../../Functions/rand";

function Chrizentema() {

    const gele = rand(0, 1);

    return (
        <> 
            <h3>gele Chrizentema yra: {gele ? <i style={{color: 'green'}}>grazi {3 * 100}</i> : 'baisi'}</h3>
            <span style={
                {
                    color: rand(0, 1) ? 'crimson' : 'black',
                    backgroundColor: 'white'
                }
            }>Aha!</span>
        </>
    )

}

export default Chrizentema;