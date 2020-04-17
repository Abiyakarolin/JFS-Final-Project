package com.fitme.model;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Lob;

import com.fitme.model.keys.WeeklyPlanCompositeKey;

@Entity
public class WeeklyPlan implements Serializable{
	 
	/**
	 * 
	 */
	private static final long serialVersionUID = 5542877420427672721L;

	@EmbeddedId
	private WeeklyPlanCompositeKey id;
	
	private String fileName;
	private String fileType;
	
	@Lob
	private byte[] fileContent;

	public WeeklyPlanCompositeKey getId() {
		return id;
	}

	public void setId(WeeklyPlanCompositeKey id) {
		this.id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getFileContent() {
		return fileContent;
	}

	public void setFileContent(byte[] fileContent) {
		this.fileContent = fileContent;
	}
	
	
	

}
