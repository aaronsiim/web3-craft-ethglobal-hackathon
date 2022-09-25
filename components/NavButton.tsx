import React from 'react'

interface Props {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

function NavButton({ title, isActive, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className={`${isActive && "bg-[#008037]"
                } hover:bg-[#008037] px-4 py-2 rounded-xl shadow-lg text-white py-1 px-2 rounded text-s `}>
            {title}
        </button>
    )
}

export default NavButton 