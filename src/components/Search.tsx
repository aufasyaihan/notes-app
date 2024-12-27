import { useState, useEffect } from "react";

const SearchBar = ({
    handleSubmit,
}: {
    handleSubmit: (keyword: string) => void;
}) => {
    const [search, setSearch] = useState<string>("");
    const [debouncedSearch, setDebouncedSearch] = useState<string>("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    useEffect(() => {
        handleSubmit(debouncedSearch);
    }, [debouncedSearch, handleSubmit]);

    return (
        <form className="flex gap-2 items-center">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="px-4 py-2 outline outline-1 outline-gray-400 rounded-md"
            />
        </form>
    );
};

export default SearchBar;
