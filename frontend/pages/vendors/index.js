import RuLayout from "../../components/ruLayout/ruLayout";

import styles from "/styles/Home.module.scss";
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getVendors } from "../../store/actions/vendor";
import { wrapper } from "../../store/store";

const Vendors = (props) => {
  return <RuLayout></RuLayout>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getVendors());
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    getVendors: bindActionCreators(getVendors, dispatch),
  };
};

const mapStateToProps = (state) => ({
  vendors: state.vendors,
});

export default connect(mapStateToProps, mapDispatchToProps)(Vendors);
