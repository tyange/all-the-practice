import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AsyncSelect from "react-select/async";

import Layout from "../components/layouts/Layout";

import classes from "./AsyncSelectPracticePage.module.css";

export default function AsyncSelectPracticePage() {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("");

  const loadOptions = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();

      return data.map((category: string) => ({
        value: category,
        label: category,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setSelectedCategory(location.pathname.split("/")[2]);
  }, [location]);

  return (
    <Layout>
      <div className={classes.filter}>
        <div>
          <AsyncSelect
            className={classes.asyncSelect}
            defaultOptions
            loadOptions={loadOptions}
            value={{ value: selectedCategory, label: selectedCategory }}
          />
        </div>
      </div>
    </Layout>
  );
}
