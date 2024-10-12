import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { useDebounce } from "../../hooks/useDebounce";
import MainLayout from "../../components/layout/main-layout";
import { IoChevronBackOutline } from "react-icons/io5";

export default function TableComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [searchQuery, setSetsearchQuery] = useState("");

  const searchValue = useDebounce(searchQuery, 500);

  const COLUMNS = [
    {
      Header: "S.no.",
      accessor: "s_no",
    },
    {
      Header: "Company",
      accessor: "company",
    },
    {
      Header: "Contact",
      accessor: "contact",
    },
    {
      Header: "Country",
      accessor: "country",
    },
  ];

  const ROWS = [
    {
      company: "Tech Solutions",
      contact: "John Doe",
      country: "USA",
    },
    {
      company: "Creative Minds",
      contact: "Sara Lee",
      country: "Canada",
    },
    {
      company: "Green Energy Corp",
      contact: "Michael Smith",
      country: "Germany",
    },
    {
      company: "Innovative Designs",
      contact: "Anna Kim",
      country: "South Korea",
    },
    {
      company: "FastTrack Logistics",
      contact: "David Wong",
      country: "China",
    },
    {
      company: "Global Industries",
      contact: "Emily Johnson",
      country: "UK",
    },
    {
      company: "Blue Ocean Trading",
      contact: "Carlos Gonzalez",
      country: "Mexico",
    },
    {
      company: "Skyline Builders",
      contact: "Rachel Adams",
      country: "Australia",
    },
    {
      company: "HealthFirst Medical",
      contact: "Liam Brown",
      country: "USA",
    },
    {
      company: "EcoFriendly Products",
      contact: "Sophia Patel",
      country: "India",
    },
  ];

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const FILTERD_DATA = searchValue
    ? ROWS.filter((data) => {
        return data.company.toLowerCase().includes(searchValue.toLowerCase());
      })
    : ROWS;

  const PAGINATED_DATA = FILTERD_DATA.slice(startIndex, endIndex);
  const TOTAL_PAGES = Math.ceil(FILTERD_DATA.length / itemPerPage);

  const codeSnippetList = [
    {
      id: 1,
      code: codeSnippet,
      filename: "components/Table.jsx",
    },
  ];
  return (
    <MainLayout title="Table" codeSnippetList={codeSnippetList}>
      <div className="overflow-auto space-y-6">
        <div>
          <SearchComponent
            searchQuery={searchQuery}
            setSetsearchQuery={setSetsearchQuery}
          />
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-primary text-white">
              {COLUMNS?.length > 0 &&
                COLUMNS.map((column) => (
                  <th className="p-3 text-left" key={column.Header}>
                    {column.Header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {PAGINATED_DATA?.length > 0 &&
              PAGINATED_DATA.map((row, index) => (
                <tr key={index} className="">
                  <td className="p-3 text-sm text-nowrap">{index + 1}</td>
                  <td className="p-3 text-sm text-nowrap">{row.company}</td>
                  <td className="p-3 text-sm text-nowrap">{row.contact}</td>
                  <td className="p-3 text-sm text-nowrap">{row.country}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {PAGINATED_DATA?.length === 0 && (
          <div className="flex_center w-full">
            <p>No data found</p>
          </div>
        )}
        <div className="flex_between">
          <select
            value={itemPerPage}
            onChange={(e) => setItemPerPage(e.target.value)}
            className="bg-orange-500 text-white px-4 py-1 rounded-md cursor-pointer"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            TOTAL_PAGES={TOTAL_PAGES}
          />
        </div>
      </div>
    </MainLayout>
  );
}

function SearchComponent({ searchQuery, setSetsearchQuery }) {
  return (
    <input
      type="text"
      className="custom_input"
      placeholder="Search here.."
      value={searchQuery}
      onChange={(e) => setSetsearchQuery(e.target.value)}
    />
  );
}

function Pagination({ currentPage, setCurrentPage, TOTAL_PAGES }) {
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="flex gap-4 items-center">
      <button
        className="p-2 bg-orange-500 rounded-md hover:bg-orange-600 cursor-pointer"
        onClick={handlePrev}
      >
        <IoChevronBackOutline size={18} className="text-white" />
      </button>
      <p className="capitalize">
        page {currentPage} of {TOTAL_PAGES}
      </p>
      <button
        className="p-2 bg-orange-500 rounded-md hover:bg-orange-600 cursor-pointer"
        disabled={currentPage === TOTAL_PAGES}
        onClick={handleNext}
      >
        <IoChevronForward size={18} className="text-white" />
      </button>
    </div>
  );
}
const codeSnippet = `import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useDebounce } from "../../hooks/useDebounce";

export default function TableComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [searchQuery, setSetsearchQuery] = useState("");

  const searchValue = useDebounce(searchQuery, 500);

  const COLUMNS = [
    {
      Header: "S.no.",
      accessor: "s_no",
    },
    {
      Header: "Company",
      accessor: "company",
    },
    {
      Header: "Contact",
      accessor: "contact",
    },
    {
      Header: "Country",
      accessor: "country",
    },
  ];

  const ROWS = [
    {
      company: "Tech Solutions",
      contact: "John Doe",
      country: "USA",
    },
    {
      company: "Creative Minds",
      contact: "Sara Lee",
      country: "Canada",
    },
    {
      company: "Green Energy Corp",
      contact: "Michael Smith",
      country: "Germany",
    },
    {
      company: "Innovative Designs",
      contact: "Anna Kim",
      country: "South Korea",
    },
    {
      company: "FastTrack Logistics",
      contact: "David Wong",
      country: "China",
    },
    {
      company: "Global Industries",
      contact: "Emily Johnson",
      country: "UK",
    },
    {
      company: "Blue Ocean Trading",
      contact: "Carlos Gonzalez",
      country: "Mexico",
    },
    {
      company: "Skyline Builders",
      contact: "Rachel Adams",
      country: "Australia",
    },
    {
      company: "HealthFirst Medical",
      contact: "Liam Brown",
      country: "USA",
    },
    {
      company: "EcoFriendly Products",
      contact: "Sophia Patel",
      country: "India",
    },
  ];

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const FILTERD_DATA = searchValue
    ? ROWS.filter((data) => {
        return data.company.toLowerCase().includes(searchValue.toLowerCase());
      })
    : ROWS;

  const PAGINATED_DATA = FILTERD_DATA.slice(startIndex, endIndex);
  const TOTAL_PAGES = Math.ceil(FILTERD_DATA.length / itemPerPage);

  const packagesToInstalled = [];
  return (
      <div className="overflow-auto space-y-6">
        <div>
          <SearchComponent
            searchQuery={searchQuery}
            setSetsearchQuery={setSetsearchQuery}
          />
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-primary text-white">
              {COLUMNS?.length > 0 &&
                COLUMNS.map((column) => (
                  <th className="p-3 text-left" key={column.Header}>
                    {column.Header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {PAGINATED_DATA?.length > 0 &&
              PAGINATED_DATA.map((row, index) => (
                <tr key={index} className="">
                  <td className="p-3 text-sm text-nowrap">{index + 1}</td>
                  <td className="p-3 text-sm text-nowrap">{row.company}</td>
                  <td className="p-3 text-sm text-nowrap">{row.contact}</td>
                  <td className="p-3 text-sm text-nowrap">{row.country}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {PAGINATED_DATA?.length === 0 && (
          <div className="flex_center w-full">
            <p>No data found</p>
          </div>
        )}
        <div className="flex_between">
          <select
            value={itemPerPage}
            onChange={(e) => setItemPerPage(e.target.value)}
            className="bg-orange-500 text-white px-4 py-1 rounded-md cursor-pointer"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            TOTAL_PAGES={TOTAL_PAGES}
          />
        </div>
      </div>
  );
}

function SearchComponent({ searchQuery, setSetsearchQuery }) {
  return (
    <input
      type="text"
      className="custom_input"
      placeholder="Search here.."
      value={searchQuery}
      onChange={(e) => setSetsearchQuery(e.target.value)}
    />
  );
}

function Pagination({ currentPage, setCurrentPage, TOTAL_PAGES }) {
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="flex gap-4 items-center">
      <button
        className="p-2 bg-orange-500 rounded-md hover:bg-orange-600 cursor-pointer"
        onClick={handlePrev}
      >
        <GrFormPrevious size={22} className="text-white" />
      </button>
      <p className="capitalize">
        page {currentPage} of {TOTAL_PAGES}
      </p>
      <button
        className="p-2 bg-orange-500 rounded-md hover:bg-orange-600 cursor-pointer"
        disabled={currentPage === TOTAL_PAGES}
        onClick={handleNext}
      >
        <GrFormNext size={22} />
      </button>
    </div>
  );
}`;
