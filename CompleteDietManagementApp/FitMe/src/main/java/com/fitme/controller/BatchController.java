package com.fitme.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fitme.model.Batch;
import com.fitme.model.Groups;
import com.fitme.service.BatchService;

@RestController
@CrossOrigin()
@RequestMapping("/fitme")
public class BatchController {
	
	
	@Autowired
	private BatchService batchService;
	
	@RequestMapping(value="/batches", method=RequestMethod.GET)
	public List<Batch> findAllBatches(){
		return batchService.findAllBatches();
	}
	
	@RequestMapping(value="/batches/{batchId}/groups", method=RequestMethod.GET)
	public Collection<Groups> findGroupsByBatchId(@PathVariable("batchId") String batchId){
		return batchService.findAllGroupsOfABatch(batchId);
	}
	

}
