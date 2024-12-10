import Cover from "../assets/images/casiopea.jpg";

const AlbumRow = () => {
    return (
        <tr>
            <td>
                <img src={Cover} alt="Album cover" />
            </td>
            <td>
                <a href="/album">
                    <b>
                        Album title that is a lot longer than the other albums
                        on this list
                    </b>
                </a>
                <div className="album-list-year">1999</div>
            </td>
            <td>5</td>
            <td>364</td>
            <td>3.54</td>
        </tr>
    );
};
export default AlbumRow;
