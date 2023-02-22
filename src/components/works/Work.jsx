import React from "react";
import { motion } from "framer-motion";

const Work = ({ data }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0.8, scale: 0.6 }}
      exit={{ opacity: 0.8, scale: 0.6 }}
      className="work_item"
    >
      <img className="work_item-img" src={data.image} alt="" />
      <p className="work_item-labelName">{data.category}</p>
      <h2 className="work_item-name">{data.title}</h2>
      <p className="work_item-disc"></p>
    </motion.div>
  );
};

export default Work;
