package com.fitme.model;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Batch {
	
	@Id
	private String batchId;
	
	private LocalDate startDate;
	private LocalDate endDate;
	
	//This field is meant to store the date of every month when measurement should be captured.
	private int monthlyMeasurementDate;

	@OneToMany(mappedBy = "batch",fetch = FetchType.EAGER)
	private Set<Groups> groups;

	public String getBatchId() {
		return batchId;
	}

	public void setBatchId(String batchId) {
		this.batchId = batchId;
	}

	

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public int getMonthlyMeasurementDate() {
		return monthlyMeasurementDate;
	}

	public void setMonthlyMeasurementDate(int monthlyMeasurementDate) {
		this.monthlyMeasurementDate = monthlyMeasurementDate;
	}

	@JsonIgnore
	public Set<Groups> getGroups() {
		return groups;
	}

	public void setGroups(Set<Groups> groups) {
		this.groups = groups;
	}

	

	public Batch() {
		
	}
	
	
	
	
	

}
