package com.fitme.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

import com.fitme.model.keys.DailyLogCompositeKey;


@Entity
public class DailyLog {

	@EmbeddedId
	private DailyLogCompositeKey dailyLogKey;
	
	private String breakfast;
	private String lunch;
	private String dinner;
	private String fruitsConsumed;
	private String vegetablesConsumed;
	private String workoutDone;
	
	public DailyLog() {
		
	}

	public DailyLogCompositeKey getDailyLogKey() {
		return dailyLogKey;
	}

	public void setDailyLogKey(DailyLogCompositeKey dailyLogKey) {
		this.dailyLogKey = dailyLogKey;
	}

	public String getBreakfast() {
		return breakfast;
	}

	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}

	public String getLunch() {
		return lunch;
	}

	public void setLunch(String lunch) {
		this.lunch = lunch;
	}

	public String getDinner() {
		return dinner;
	}

	public void setDinner(String dinner) {
		this.dinner = dinner;
	}

	public String getFruitsConsumed() {
		return fruitsConsumed;
	}

	public void setFruitsConsumed(String fruitsConsumed) {
		this.fruitsConsumed = fruitsConsumed;
	}

	public String getVegetablesConsumed() {
		return vegetablesConsumed;
	}

	public void setVegetablesConsumed(String vegetablesConsumed) {
		this.vegetablesConsumed = vegetablesConsumed;
	}

	public String getWorkoutDone() {
		return workoutDone;
	}

	public void setWorkoutDone(String workoutDone) {
		this.workoutDone = workoutDone;
	}

	@Override
	public String toString() {
		return "DailyLog [dailyLogKey=" + dailyLogKey + ", breakfast=" + breakfast + ", lunch=" + lunch + ", dinner="
				+ dinner + ", fruitsConsumed=" + fruitsConsumed + ", vegetablesConsumed=" + vegetablesConsumed
				+ ", workoutDone=" + workoutDone + "]";
	}
	
	
	
	
	
	
}
