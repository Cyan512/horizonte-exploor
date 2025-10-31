import { Link } from "react-router-dom";
import {cn} from '@/shared/utils/tailwind-utils.js'

export default function CategoryCard({ category }) {
    const { img, name, submenu } = category;
    return (
        <button>
            <img src={img} alt="" />
            <div />
            <div>
                <div>
                    <div>
                        <h3>
                            {name}
                        </h3>
                        <span>
                            {submenu.length} List
                        </span>
                    </div>
                </div>
                <Link>
                    Book Now
                </Link>
            </div>
        </button>
    )
}
