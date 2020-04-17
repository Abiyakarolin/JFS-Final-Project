package com.fitme.service;

import java.util.Set;

import com.fitme.model.MonthlyMeasurementChart;

public interface MonthlyMeasurementChartService {

	boolean save(MonthlyMeasurementChart chart);

	Object findByCategory(String category, String id);

	Set<MonthlyMeasurementChart> findMonthlyMeasurementChartHistoryByUser(String userid);

	Integer findMeasurementDateForCurrentMonth(String userid);

}
