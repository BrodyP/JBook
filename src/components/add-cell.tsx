import './add-cell.css'
import { useActions } from '../hook/use-action'

interface AddCellProps {
  nextCellId: string | null
  forceVisible?: boolean
}
const AddCell: React.FC<AddCellProps> = ({ nextCellId, forceVisible }) => {
  const { insertCellBefore } = useActions()
  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className="add-button">
        <button
          className="button is-primary is-rounded is-small"
          onClick={() => insertCellBefore(nextCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-primary is-rounded is-small"
          onClick={() => insertCellBefore(nextCellId, 'text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  )
}
export default AddCell
