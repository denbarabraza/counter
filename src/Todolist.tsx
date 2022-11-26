export const Todolist = (props: any) => {

    return (
        <div>
            <h3>Название</h3>
            <div>
                <input/>
                <button> + </button>
            </div>

            <ul>
                <li>Лишка</li>
            </ul>

            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}