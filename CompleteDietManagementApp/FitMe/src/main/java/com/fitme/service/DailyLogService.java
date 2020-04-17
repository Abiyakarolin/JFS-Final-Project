package com.fitme.service;

import java.util.Set;

import com.fitme.model.DailyLog;

public interface DailyLogService {

	boolean save(DailyLog dailyLog);

	Object findByCategory(String category, String id);

	Set<DailyLog> findDailyLogHistoryByUser(String userid);

}
