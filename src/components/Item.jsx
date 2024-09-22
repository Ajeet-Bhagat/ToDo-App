import { MdBookmarkRemove } from "react-icons/md";

function Item({name,date,onDeleteClick}) {
  return(
    <div className="container item-cont Amarg">

  <div className="row">
    <div className="col-sm-5">
      <p>{name}</p>
    </div>
    <div className="col-sm-5">
    <p>{date}</p>
    </div>
    <div className="col-sm-2">
    <button type="button" className="btn btn-danger Asizbtn" onClick={()=>{onDeleteClick(name)}}><MdBookmarkRemove /></button>
    </div>
  </div>
</div>
  );
}

export default Item
